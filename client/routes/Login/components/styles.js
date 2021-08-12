import { css } from 'emotion';
export const loginbg = css`
border: solid 1px #cccccc;
`;

export const loginPage = css`
  // max-width: 1500px;
  // width: 100%;
  // border: solid 1px black;
  // position: relative;
  // top: 10em;
  // max-width: 500px;
  // padding: 20px;
  // margin: auto;

  width: 100%;
  background-color: #f1f1f1;
  border: solid 1px #cccccc;
  max-width: 550px;
  padding: 40px;
  margin: auto;
  position: absolute;
  left: 50%;
  border-radius: 5px;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const loginBox = css`
  margin: 0 auto;
  padding: 20px;
`;
export const fields = css`
  display: flex;
  flex-direction: column;
`;
export const button = css`
  background-color: #489934;
  color: white;
  // border-radius: 4px;
  height: auto;
  width: 400px;
  padding: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 0;
  align-self: center;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: green;
  }
`;
export const mainHeader = css`
  text-align: left;
  color: red;
  font-size: 20px;
  margin-top: -20px;
  margin-bottom: 12px;
`;
export const textField = css`
  border: 1px solid #979797b5;
  border-radius: 5px;
  background: none;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  box-shadow: none;
  
    outline: none;
    border: none;
    border-bottom: 2px solid #999 !important;
    border-radious: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  &:focus {
    outline: 0;
  }
`;
export const linkText = css`
  text-align: center;
  color: #000033;
  margin-top: 20px;
  margin-bottom: -10px;
  font-weight: bold;
`;
export const checkBoxTxt = css`
  color: #000033;
  margin-top: 10px;
`;
export const secondHeader = css`
  text-align: center;
  font-size: 16px;
  margin-top: -10px;
  margin-bottom: 20px;
`;
export const errorText = css`
  color: red;
`;

export const succesResponse = css`
  color: green;
`;
