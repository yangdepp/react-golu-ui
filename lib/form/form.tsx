import React, { ReactFragment } from 'react';
import Input from '../input/input';
import { scopedClassMaker } from '../helpers/classes';
import './form.scss';

const sc = scopedClassMaker('golu-form');

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
      <table>
        {props.fileds.map((f) => (
          <tr key={f.name} className={sc('tr')}>
            <td className="golu-form-td">
              <span className="golu-form-label">{f.label}</span>
            </td>
            <td className="golu-form-td">
              <Input
                className="golu-form-input"
                type={f.input.type}
                value={formData[f.name]}
                // onChange={(e) => onInputChange(f.name, e.target.value)}
                onChange={onInputChange.bind(null, f.name)}
              />
            </td>
            <div>{props.errors[f.name]}</div>
          </tr>
        ))}
        <tr className={sc('tr')}>
          <td className="golu-form-td" />
          <td className="golu-form-td">{props.buttons}</td>
        </tr>
      </table>
    </form>
  );
};

export default Form;
