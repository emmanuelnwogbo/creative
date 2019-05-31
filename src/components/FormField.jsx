import React, {Component} from 'react';

import '../scss/components/form_field.scss';

class FormField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null
    }
  }

  renderDropDown = (dropdownMenu, classNames) => {
    const { current } = this.state;
    return dropdownMenu.map(dropdown => {
      if (dropdown === current) {
        return (
          <div key={dropdown} className={`form__field--area-dropdownitem-current ${classNames}`}>
            <p>{dropdown}</p>
            <svg className={`form__field--area-dropdownitem-current-svg`}>
              <use xlinkHref="./img/sprite.svg#icon-chevron-down" />
            </svg>
          </div>
        )        
      }
      return (
        <div key={dropdown} className={`form__field--area-dropdownitem ${classNames}`}>
          <p>{dropdown}</p>
        </div>
      )
    })
  }

  componentDidMount() {
    const { dropdownMenu } = this.props;
    if (dropdownMenu) {
      this.setState({ current: dropdownMenu[0] })
    }
  }

  render() {
    let { placeholder, name, classNames, type, required, dropdownMenu} = this.props
    if (classNames === undefined || classNames === null) {
      classNames = ``
    }
  
    if (dropdownMenu && dropdownMenu !== null && dropdownMenu !== undefined) {
      return (
        <div className={`form__field ${classNames}`}>
          <div className={`form__field--area ${classNames}`}>
            <p className={`form__field--label ${classNames}`}>{name}:</p>
          </div>
          <div className={`form__field--area form__field--area-dropdown ${classNames}`}>
            <input name={name} type={type} placeholder={placeholder} className={`form__field--input form__field--input--dropdown ${classNames}`}/>
            <div className={`form__field--area-dropdownmenu ${classNames}`}>
              {this.renderDropDown(dropdownMenu, classNames)}
            </div>
          </div>
        </div>      
      )
    }
  
    if (required && required !== null && required !== undefined) {
      return (
        <div className={`form__field ${classNames}`}>
          <div className={`form__field--area ${classNames}`}>
            <p className={`form__field--label ${classNames}`}>{name}:</p>
          </div>
          <div className={`form__field--area ${classNames}`}>
            <input name={name} type={type} placeholder={placeholder} className={`form__field--input ${classNames}`} required/>
          </div>
        </div>
      )
    }
    return (
      <div className={`form__field ${classNames}`}>
        <div className={`form__field--area ${classNames}`}>
          <p className={`form__field--label ${classNames}`}>{name}:</p>
        </div>
        <div className={`form__field--area ${classNames}`}>
          <input name={name} type={type} placeholder={placeholder} className={`form__field--input ${classNames}`}/>
        </div>
      </div>
    )    
  }
}

export default FormField;