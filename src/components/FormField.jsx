import React, {Component} from 'react';

import '../scss/components/form_field.scss';

class FormField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: false,
      dropdownItems: false
    }
  }

  openDropDown = () => {
    const checkbox = document.getElementById('form__field--area-dropdownmenu-checkbox');
    if (checkbox.checked) {
      return checkbox.checked = false
    }
    return checkbox.checked = true;
  }

  closeDropDown = (e) => {
    const target = e.target.id || e.target.innerHTML
    this.setState({ current: target }, this.openDropDown)
  }

  renderDropDowns = () => {
    const { dropdownItems, current } = this.state;
    if (dropdownItems && current) {
      return dropdownItems.map(item => {
        if (item === current) {
          return (
            <div id={item} key={item} onClick={this.openDropDown} className={`form__field--area-dropdownitem`} style={{
              zIndex: '3',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%'
            }}>
              <p>{item}</p>
              <svg className={`form__field--area-dropdownitem-svg`}>
                <use xlinkHref="./img/sprite.svg#icon-chevron-down" />
              </svg>
            </div>        
          )
        }
        return (
          <div id={item} key={item} onClick={this.closeDropDown} className={`form__field--area-dropdownitem form__field--area-dropdownitem-open`}>
            <p>{item}</p>
          </div>        
        )
      })
    }
  }

  componentDidMount() {
    const { dropdownMenu, placeholder} = this.props;
    if (dropdownMenu) {
      let dropdownItems = [`${placeholder}`, ...dropdownMenu];
      this.setState({
        current: dropdownItems[0],
        dropdownItems
      })
    }
  }

  render() {
    let { placeholder, name, classNames, type, required, dropdownMenu} = this.props
    if (classNames === undefined || classNames === null) {
      classNames = ``
    }
  
    if (dropdownMenu && dropdownMenu !== null && dropdownMenu !== undefined) {
      const { current } = this.state;
      if (current) {
        return (
          <div className={`form__field ${classNames}`}>
            <div className={`form__field--area ${classNames}`}>
              <p className={`form__field--label ${classNames}`}>{name}:</p>
            </div>
            <div className={`form__field--area form__field--area-dropdown ${classNames}`}>
              <input name={name} type={type} value={current} placeholder={placeholder} className={`form__field--input form__field--input--dropdown ${classNames}`}/>
              <div className={`form__field--area-dropdownmenu ${classNames}`}>
                <input id={`form__field--area-dropdownmenu-checkbox`} className={`form__field--area-dropdownmenu-checkbox`} type="checkbox" />
                {this.renderDropDowns()}
              </div>
            </div>
          </div>      
        )
      }
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