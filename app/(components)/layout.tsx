"use client"

import React, { Fragment, useEffect, useState, useContext, useRef, } from 'react'
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { data$, getState } from '@/shared/layouts-components/services/switcherServices';
import { Initialload } from '@/shared/contextapi';

const Layout = ({ children }: any) => {

    const [localVariable, setLocalVariable] = useState(getState());

    const customstyles: any = {
        ...(localVariable.colorPrimaryRgb !== '' && { '--primary-rgb': localVariable.colorPrimaryRgb }),
        ...(localVariable.bodyBg !== '' && { '--body-bg-rgb': localVariable.bodyBg }),
        ...(localVariable.bodyBg2 !== '' && { '--body-bg-rgb2': localVariable.bodyBg2 }),
        ...(localVariable.lightRgb !== '' && { '--light-rgb': localVariable.lightRgb }),
        ...(localVariable.formControlBg !== '' && { '--form-control-bg': localVariable.formControlBg }),
        ...(localVariable.gray !== '' && { '--gray-3': localVariable.gray }),
        ...(localVariable.inputBorder !== '' && { '--input-border': localVariable.inputBorder }),
    };

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setLocalVariable(e);
        });

        return () => subscription.unsubscribe();
    }, []);

    const theme: any = useContext(Initialload);
    useEffect(() => {
        if (typeof window !== 'undefined' && !theme.pageloading) {
            LocalStorageBackup(theme.setpageloading);
        }
    }, []);



    return (
        <Fragment>
            <html
                suppressHydrationWarning={true}
                lang={localVariable.lang || undefined}
                dir={localVariable.dir || undefined}
                data-theme-mode={localVariable.dataThemeMode || undefined}
                data-header-styles={localVariable.dataHeaderStyles || undefined}
                data-vertical-style={localVariable.dataVerticalStyle || undefined}
                data-nav-layout={localVariable.dataNavLayout || undefined}
                data-menu-styles={localVariable.dataMenuStyles || undefined}
                data-toggled={localVariable.toggled || undefined}
                data-nav-style={localVariable.dataNavStyle || undefined}
                hor-style={localVariable.horStyle || undefined}
                data-page-style={localVariable.dataPageStyle || undefined}
                data-width={localVariable.dataWidth || undefined}
                data-menu-position={localVariable.dataMenuPosition || undefined}
                data-header-position={localVariable.dataHeaderPosition || undefined}
                data-icon-overlay={localVariable.iconOverlay || undefined}
                data-bg-img={localVariable.bgImg || undefined}
                icon-text={localVariable.iconText || undefined}
                style={customstyles}
            >
                <head>
                    <title>Vyzor NextJs App-Router Typescript React Bootstrap Admin Dashboard Template</title>
                    <meta name="keywords" content="admin dashboard react, admin panel template, bootstrap dashboard template, dashboard nextjs, next js admin panel, next js dashboard, next js typescript, nextjs admin dashboard template , nextjs dashboard template, nextjs framework, nextjs styled components, nextjs template, nextjs ui, react bootstrap template, react typescript template" />
                    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
                </head>
                <body className={`${localVariable.body ? localVariable.body : ''}`} >
                    {theme.pageloading && children}
                </body>
            </html>
        </Fragment>
    );
}

export default Layout;
