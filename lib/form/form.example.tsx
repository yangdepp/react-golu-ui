import React, { useState } from 'react';
import Form from './form';

const FormExample: React.FunctionComponent = () => {
  const [formData] = useState({
    username: '',
    password: ''
  });

  const [fileds] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } }
  ]);
  return <Form value={formData} fileds={fileds} />;
};

export default FormExample;
