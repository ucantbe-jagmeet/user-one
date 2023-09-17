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
  value: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
};

export type FormRowSelectProps = {
  labelText?: string;
  name: string;
  value: string;
  handleOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  list: string[];
};
