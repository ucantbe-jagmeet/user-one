export type navLinksDataProps = {
  id: number;
  text: string;
  href: string;
};

export type homeModalsDataProps = {
  id: number;
  btn1: string;
  text: string;
  btn2: string;
};

export type FormRowProps = {
  type: string;
  name: string;
  value: string;
  handleChange: () => void;
};
