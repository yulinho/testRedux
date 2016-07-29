import React from 'react'
import FilterLink from '../containers/FilterLink'
import FilterMyModal from '../containers/FilterMyModal'
import styles from './Header.css'
// import EnhButton from '../containers/EnhButton'
import { Button ,ButtonGroup,DropdownButton ,MenuItem ,Modal,Tabs,Tab,FormGroup ,ControlLabel ,FormControl ,HelpBlock ,Glyphicon
,InputGroup ,
Form ,
Col ,
Checkbox ,
Radio,
 } from 'react-bootstrap';

const buttonGroupInstance = (
  <ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);


const tabsInstance = (
  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
  </Tabs>
);
const formInstance = (
  <form>
    <FormGroup controlId="formValidationSuccess1" validationState="success">
      <ControlLabel>Input with success</ControlLabel>
      <FormControl type="text" />
      <HelpBlock>Help text with validation state.</HelpBlock>
    </FormGroup>

    <FormGroup controlId="formValidationWarning1" validationState="warning">
      <ControlLabel>Input with warning</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationError1" validationState="error">
      <ControlLabel>Input with error</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationSuccess2" validationState="success">
      <ControlLabel>Input with success and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationWarning2" validationState="warning">
      <ControlLabel>Input with warning and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationError2" validationState="error">
      <ControlLabel>Input with error and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationSuccess3" validationState="success">
      <ControlLabel>Input with success and custom feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback>
        <Glyphicon glyph="music" />
      </FormControl.Feedback>
    </FormGroup>

    <FormGroup controlId="formValidationWarning3" validationState="warning">
      <ControlLabel>Input group with warning</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
      <FormControl.Feedback />
    </FormGroup>

    <Form componentClass="fieldset" horizontal>
      <FormGroup controlId="formValidationError3" validationState="error">
        <Col componentClass={ControlLabel} xs={3}>
          Input with error
        </Col>
        <Col xs={9}>
          <FormControl type="text" />
          <FormControl.Feedback />
        </Col>
      </FormGroup>

      <FormGroup controlId="formValidationSuccess4" validationState="success">
        <Col componentClass={ControlLabel} xs={3}>
          Input group with success
        </Col>
        <Col xs={9}>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
          <FormControl.Feedback />
        </Col>
      </FormGroup>
    </Form>

    <Form componentClass="fieldset" inline>
      <FormGroup controlId="formValidationWarning4" validationState="warning">
        <ControlLabel>Input with warning</ControlLabel>
        {' '}
        <FormControl type="text" />
        <FormControl.Feedback />
      </FormGroup>
      {' '}
      <FormGroup controlId="formValidationError4" validationState="error">
        <ControlLabel>Input group with error</ControlLabel>
        {' '}
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text" />
        </InputGroup>
        <FormControl.Feedback />
      </FormGroup>
    </Form>

    <Checkbox validationState="success">
      Checkbox with success
    </Checkbox>
    <Radio validationState="warning">
      Radio with warning
    </Radio>
    <Checkbox validationState="error">
      Checkbox with error
    </Checkbox>

    {/* This requires React 15's <span>-less spaces to be exactly correct. */}
    <FormGroup validationState="success">
      <Checkbox inline>
        Checkbox
      </Checkbox>
      {' '}
      <Checkbox inline>
        with
      </Checkbox>
      {' '}
      <Checkbox inline>
        success
      </Checkbox>
    </FormGroup>
  </form>
);
const button = (<Button  bsStyle="primary" onClick={()=>{
        alert("test")
      }}>button</Button>);
const Header = () => (
  <div className={styles.header}>
    <div className={styles.inner}>
      
    <FilterMyModal filter="SHOW_ALL" onOff={true}>
      测试消息
    </FilterMyModal>

    </div>
  </div>
)

export default Header