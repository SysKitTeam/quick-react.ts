import * as React from 'react';
import * as classNames from 'classnames';
import './Wizard.scss';
import { IPage } from './IPage';
import { IStepProps } from './IStepProps';
import { hashHistory } from 'react-router';
import { Button } from '../../components/Button/Button';
import {IButtonProps} from '../../components/Button/Button.Props';
import {autobind } from '../../utilities/autobind';
import Stepper from './Stepper';

export interface IWizardProps {
  steps?: Array<IStepProps>;
  onPageRender?: (index: number) => JSX.Element;
  onPageEnter?: (currentStepIndex: number, nextStepIndex: number) => void;
  onPageLeave?: (currentStepIndex: number, nextStepIndex: number) => void;
  onFinish?: () => void;
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
    hashHistory.push('/');
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
        return <Button {...button} key={index}></Button>;
      });
    }

    if (this.state.currentStep !== (this.props.steps.length - 1)) {
      buttons.push(<Button disabled={!this.props.nextBtnState} className="wizard-next-btn" onClick={(e) => { this._nextStep(e); }}>NEXT</Button>);
    } else {
      buttons.push(<Button disabled={!this.props.nextBtnState} className="wizard-finish-btn" onClick={(e) => { this._finishCreateScript(e); }}>FINISH</Button>);
    }
    return buttons;
  }

  private get stepClassName() {
    const className = this.props.steps[this.state.currentStep].className;
    return className ? className : '';
  }

  public render(): JSX.Element {

    const stepWindowClassName = classNames(
      'wizard__step-window',
      this.stepClassName
    );

    return (
      <div className="wizard__container">
        <h1 className="wizard__title">{this.props.title}</h1>
        <Stepper steps={this.props.steps} activeStep={this.state.currentStep} />
        <div className={stepWindowClassName}>
          {this.props.onPageRender(this.state.currentStep)}
          <div className="wizard__footer-navigation">
            <div className="wizard__left-navigation-btn-page__container">
              <Button className="wizard-cancel-btn" onClick={(e) => { this._cancelCreateScript(e); }}>CANCEL</Button>
            </div>
            <div className="wizard__right-navigation-btn-page-container">
              <Button disabled={this.state.currentStep === 0} className="wizard-back-btn" onClick={(e) => { this._backStep(e); }}>BACK</Button>
              {this._renderButtons()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
