import * as React from 'react';
import * as classNames from 'classnames';
import './Wizard.scss';
import { IPage } from './IPage';
import { IStepProps } from './IStepProps';
import { Button } from '../../components/Button/Button';
import { IButtonProps } from '../../components/Button/Button.Props';
import { autobind } from '../../utilities/autobind';
import Stepper from './Stepper';

export interface IWizardProps {
  steps?: Array<IStepProps>;
  onPageRender?: (index: number) => JSX.Element;
  onPageEnter?: (currentStepIndex: number, nextStepIndex: number) => void;
  onPageLeave?: (currentStepIndex: number, nextStepIndex: number) => void;
  onFinish?: () => void;
  onCancel?: () => void;
  currentStep?: number;
  currentPage?: IPage;
  title?: string;
  nextBtnState?: boolean;
}

export interface IWizardState {
  currentStep?: number;
}


export default class Wizard extends React.Component<IWizardProps, IWizardState> {

  constructor(props: IWizardProps) {
    super(props);

    this.state = {
      currentStep: 0
    };

  }

  componentWillMount() {
    this.props.onPageEnter(0, 1);
  }

  private _nextStep(e) {
    e.preventDefault();
    if ((this.state.currentStep + 1) !== this.props.steps.length) {
      this.setState({
        currentStep: this.state.currentStep + 1
      });
      this.props.onPageRender((this.state.currentStep) + 1);
      this.props.onPageLeave(this.state.currentStep, this.state.currentStep + 1);
      this.props.onPageEnter(this.state.currentStep + 1, this.state.currentStep + 2);
    }
  }

  private _backStep(e) {
    e.preventDefault();
    if (this.state.currentStep > 0) {
      this.setState({
        currentStep: this.state.currentStep - 1
      });
      this.props.onPageRender(this.state.currentStep - 1);
      this.props.onPageLeave(this.state.currentStep, this.state.currentStep - 1);
      this.props.onPageEnter(this.state.currentStep - 1, this.state.currentStep);
    }
  }

  private _cancelCreateScript(e) {
    e.preventDefault();
    if (this.props.onCancel !== undefined) {
      this.props.onCancel();
    }
  }


  private _finishCreateScript(e) {
    e.preventDefault();
    /*
    Some action after script has finished!
    */
    this.props.onFinish();
  }

  @autobind
  private _renderButtons(): Array<JSX.Element> {
    let buttons = [];
    const currentStep = this.props.steps[this.state.currentStep];

    if (currentStep.optionalButtons) {
      buttons = currentStep.optionalButtons.map((button, index) => {
        const buttonClassName = classNames(
          'options-button',
          [button.className],
          {
            'button-tertiary': button.className === undefined
          }
        );

        return <Button {...button} className={buttonClassName} key={index}></Button>;
      });
    }

    if (this.state.currentStep !== (this.props.steps.length - 1)) {
      buttons.push(<Button disabled={!this.props.nextBtnState} className="button-primary" onClick={(e) => { this._nextStep(e); }}>Next</Button>);
    } else {
      buttons.push(<Button disabled={!this.props.nextBtnState} className="button-primary" onClick={(e) => { this._finishCreateScript(e); }}>Finish</Button>);
    }
    return buttons;
  }

  private get stepClassName() {
    const className = this.props.steps[this.state.currentStep].className;
    return className ? className : '';
  }

  public render(): JSX.Element {

    const stepWindowClassName = classNames(
      'wizard-step-window',
      this.stepClassName
    );

    return (
      <div className="wizard-container">
        <div className="wizard-title">{this.props.title}</div>
        <Stepper steps={this.props.steps} activeStep={this.state.currentStep} />
        <div className={stepWindowClassName}>
          {this.props.onPageRender(this.state.currentStep)}
          <div className="wizard-footer-navigation">
            <div className="wizard-left-navigation-btn-page-container"></div>
            <div className="wizard-right-navigation-btn-page-container">
              {this.props.onCancel &&
                <Button className="button-textual" onClick={(e) => { this._cancelCreateScript(e); }}>Cancel</Button>
              }
              <Button disabled={this.state.currentStep === 0} className="button-primary-gray" onClick={(e) => { this._backStep(e); }}>Back</Button>
              {this._renderButtons()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
