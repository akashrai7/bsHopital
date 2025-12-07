"use client"
import Backtotop from '@/shared/layouts-components/backtotop/backtotop';
import Landingswitcher from '@/shared/layouts-components/switcher/landing-switcher';
import React, { Fragment, useEffect, useRef } from 'react'

const layout = ({ children }: any) => {

  const bodyRef:any = useRef(null);

  useEffect(() => {

    bodyRef.current = document.body

    bodyRef.current?.classList.add('landing-body')
    return () => {
      bodyRef.current?.classList.remove('landing-body')
    }
  },[]);

  const getDocumentElement = (): HTMLElement => {
    return document.documentElement;
};

  useEffect(() => {
    const html = getDocumentElement()
  
    // Remove the attribute on mount
    html.removeAttribute('data-bg-img');
  
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-bg-img") {
          html.removeAttribute('data-bg-img'); // Force remove it again
        }
      });
    });
  
    observer.observe(html, { attributes: true });
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Fragment >
      <div>
        <Landingswitcher />
        {children}
      </div>
      <Backtotop />
    </Fragment>
  )
}

export default layout