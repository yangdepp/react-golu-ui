import React, { ReactFragment } from 'react';
import Input from '../input/input';

export interface FormValue {
  [K: string]: any;
}

interface Props {
  value: FormValue;
  fileds: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  // const onInputChange = (name: string, value: string) => {
  //   console.log(name, value);
  // };

  const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValue = { ...formData, [name]: e.target.value };
    props.onChange(newFormValue);
  };

  return (
    <form onSubmit={onSubmit}>
      {props.fileds.map((f) => (
        <div key={f.name}>
          {f.label}
          <Input
            type={f.input.type}
            value={formData[f.name]}
            // onChange={(e) => onInputChange(f.name, e.target.value)}
            onChange={onInputChange.bind(null, f.name)}
          />
          <div>{props.errors[f.name]}</div>
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  );
};

export default Form;
