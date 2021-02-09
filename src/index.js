import React from 'react';
import './index.css';

class ReminderCalendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={`widget widget-reminder ${this.props.shadow ? 'widget-shadow': ''}`}>
                {this.props.dateSections.length > 0 && this.props.dateSections.map((dateSection, index) => {
                    return(
                        <div key={`section_${index}`}>
                            <div className="widget-reminder-header">
                                {dateSection.title}

                                {dateSection.rightButton && dateSection.rightButton.show && !this.props.customDateSectionRightButton &&
                                    <div className="float-right" style={{marginTop: -4}}>
                                        <button {...dateSection.rightButton.props} onClick={() => typeof(this.props.onDateSectionRightButtonClick) === "function" && this.props.onDateSectionRightButtonClick(dateSection, index)}>{dateSection.rightButton.title}</button>
                                    </div>
                                }

                                {this.props.customDateSectionRightButton &&
                                    <div className="float-right" style={{marginTop: -4}}>
                                        {this.props.customDateSectionRightButton}
                                    </div>
                                }
                            </div>
                            {dateSection.items && dateSection.items.length > 0 && dateSection.items.map( (item, itemIndex) => {
                                return(
                                    <div className="widget-reminder-container">
                                        <div className="widget-reminder-time">
                                            {item.isAllDay ? item.allDayTitle : null}
                                            {!item.isAllDay && <div>{item.startTime} <br/> {item.endTime}</div>}
                                        </div>
                                        <div className="widget-reminder-divider" style={{backgroundColor: item.separatorColor}} />
                                        <div className="widget-reminder-content" style={{...item.style, cursor: item.onItemClick ? 'pointer' : ''}} onClick={() => typeof(this.props.onItemClick) === "function" && this.props.onItemClick(dateSection, item, itemIndex)}>
                                            {item.rightViewComponent &&
                                                <div style={{position: 'absolute', right: 10}}>
                                                    {item.rightViewComponent}
                                                </div>
                                            }
                                            <h4 className="widget-title">{item.title}</h4>
                                            <div className="widget-desc">
                                                <i className={`${item.icon}`} /> {item.subTitle}
                                            </div>
                                            {item.infoViewComponent &&
                                                <div className="m-t-15">
                                                    {item.infoViewComponent}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

ReminderCalendar.defaultProps = {
    shadow: false,
    customDateSectionRightButton: null,
    dateSections: [],
    onItemClick: null,
    onDateSectionRightButtonClick: null
};

export default ReminderCalendar;
