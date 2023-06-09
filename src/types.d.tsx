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
  color1: string;
  color2: string;
  href: string;
};

export type FormRowProps = {
  type: string;
  name: string;
  value: string;
  handleChange: () => void;
};

export type FormRowSelectProps = {
  name: string;
  value: string;
  handleChange: () => void;
  list: string[];
};
