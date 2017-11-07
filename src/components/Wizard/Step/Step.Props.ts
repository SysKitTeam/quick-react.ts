import { IButtonProps } from '../../../components/Button/Button.Props';

export interface IStepProps {
    title: string;
    first: boolean;
    isLast: boolean;
    active: boolean;
    completed: boolean;
    className?: string;
    optionalButtons?: Array<IButtonProps>;
}
