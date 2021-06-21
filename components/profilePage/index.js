/* eslint-disable */
import cookies from 'next-cookies';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import persist from '../../libraries/persist';
import { verifyAuth } from '../../libraries/utils/api';

const logout = async (router) => {
    await persist.willRemoveAccessToken();
    router.push('/');
};

/* eslint-disable arrow-body-style */
const Profile = ({ data: ssrData }) => {
    const router = useRouter();
    const [userData, setUserData] = useState({});
    useEffect(async () => {
        const token = await persist.willGetAccessToken();
        console.log('token', token);
        console.log('ssrData', ssrData);

        try {
            console.log('token2', token);

            if (!token) {
                console.log('token1', token);
                router.push(`/login?returnUrl=${router.asPath}`);
            }
            if (ssrData && ssrData.name) {
                setUserData(ssrData);
            } else {
                const authData = await verifyAuth(token);
                console.log('redultdata', authData);
                setUserData(authData);
            }
        } catch (err) {
            console.log('errrr', err);
            // router.push(`/login?returnUrl=${router.asPath}`);
        }
        console.log(token);
    }, []);
    console.log(`userData`, userData);
    return (
        <div>
            <div>Welcome {userData?.data?.name}</div>
            <div onClick={logout.bind(this, router)}>Logout</div>{' '}
        </div>
    );
};

if (typeof window === 'undefined') {
    Profile.getInitialProps = async (ctx) => {
        try {
            if (!ctx.req) return {};
            const token = cookies(ctx)[persist.ACCESS_TOKEN_KEY];
            if (!token) {
                router.push(`/login?returnUrl=${router.asPath}`);
                console.log(`err`, 'Token is not present');
            }
            const data = await verifyAuth(token);
            return {
                data,
            };
        } catch (err) {
            console.log('incatch', err);
            ctx.res.writeHead(302, {
                Location: `/login?returnUrl=${ctx.asPath}`,
            });
            ctx.res.end();
        }
    };
}

export default Profile;
