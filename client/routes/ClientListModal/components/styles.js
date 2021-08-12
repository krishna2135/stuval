import { css } from 'emotion';

export const subHeader = css`
  font-size: 14px;
  margin-left: 12px;
  margin-top: 1em;
  color: #0766cc;
`;
export const templateBox = css`
  margin: auto;
  margin-top: 4%;
  // border-bottom: 1px solid #ced4da;
  margin-bottom: -1%;
`;
export const paginationContainer = css`
  display: flex;
  width: 100%;
  margin: 2% 0 2% 0;
`;
export const paginationBox = css`
  display: flex;
  width: 90.5%;
  // padding: 20px;
  margin: auto;
`;

export const arrow = css`
  width: 26px;
  height: 26px;
  background: white;
  padding: 2px 6px;
  margin-left: 10px;
  border: 1px solid grey;
`;
export const disabledArrow = css`
  color: grey;
`;
export const selectParent = css`
  display: flex;
  margin: 1% 0 0 0%;
`;
export const containerInner = css`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const selectBox = css`
  margin-left: 0.5rem;
  background: url('http://ec2-34-207-98-231.compute-1.amazonaws.com/images/drop.png')
    no-repeat right 0.75rem center;
  background-color: white;
  appearance: none;
  width: 64px;
  padding: 2px 0 1px 4px;
`;

export const loaderContainer = css`
  margin: auto;
  max-width: 88%;
  border: 1px solid #cccccc;

  padding: 15px;
  margin-top: 4%;
  background-color: white;
`;
