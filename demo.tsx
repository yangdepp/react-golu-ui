import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
interface Props {
  code: string;
}

const Demo: React.FunctionComponent<Props> = props => {
  // const [codeVisoble, setCodeVisbile] = useState(false);
  const bg = {backgroundColor: '#2b3c4c', display: 'inline-block', padding: '40px'};
  return (
    <div>
      {props.children}
      <Highlight {...defaultProps} code={props.code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={bg}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Demo;
