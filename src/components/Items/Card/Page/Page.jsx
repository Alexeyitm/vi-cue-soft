import React from 'react';
import './Page.scss';

function Page({ isOpenPage }) {

  return (
    <section className={"page" + (isOpenPage ? " page_open app_hidden" : "")}>
      
    </section>
  );
}

export default Page;