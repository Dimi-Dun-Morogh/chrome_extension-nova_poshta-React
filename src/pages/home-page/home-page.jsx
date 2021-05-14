import React from 'react';
import FooterWithHistory from '../../components/footer_with_history/footer_with_history.component';
import Form from '../../components/form/form.component';
import PackageInfo from '../../components/package_info/package_info.component';

const HomePage = () => (
  <>
    <Form />
    <PackageInfo />
    <FooterWithHistory />
  </>
);

export default HomePage;
