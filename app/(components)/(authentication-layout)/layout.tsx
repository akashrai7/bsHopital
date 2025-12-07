"use client"

import React, { Fragment, useEffect, useRef } from 'react'
import Switcher from '@/shared/layouts-components/switcher/switcher'
import { usePathname } from 'next/navigation'

const layout = ({ children }: any) => {

  const pathName = usePathname()
  const bodyRef: any = useRef(null);

  useEffect(() => {
    bodyRef.current = document.body

    if (pathName.includes('/basic')) {
      bodyRef.current.classList.add('authentication-background', 'authenticationcover-background', 'position-relative');
    } else {
      bodyRef.current.classList.remove('authentication-background', 'authenticationcover-background', 'position-relative');
    }

    if (pathName.includes('/cover')) {
      bodyRef.current.classList.add('bg-white')
    } else {
      bodyRef.current.classList.remove('bg-white')
    }

    if (pathName.includes('/coming-soon') || pathName.includes('/under-maintainance')) {
      bodyRef.current.classList.add('coming-soon-main')
    } else {
      bodyRef.current.classList.remove('coming-soon-main')
    }

    return () => {
      bodyRef.current.classList.remove('authentication-background', 'authenticationcover-background', 'position-relative');
      bodyRef.current.classList.remove('bg-white');
      bodyRef.current.classList.remove('coming-soon-main');
    };

  }, [pathName]);


  return (
    <Fragment>
      <Switcher />
      {children}
    </Fragment>

  )
}

export default layout