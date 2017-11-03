import { IWizardStep } from './../Wizard.Props';

export interface IStepperProps {
    activeStep: number;
    steps: Array<IWizardStep>;
}
