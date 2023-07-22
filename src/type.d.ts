export interface WidgetType {
  type: string
}

export interface AspectProps {
  aspect: number;
  title: string;
}

export interface InputProps {
  id: number,
  label: string,
  type: string,
  placeholder: string
}

export interface Props {
  inputs: InputProps[];
  title: string;
}

export interface DarkModeStates {
  isDarkMode: boolean
}