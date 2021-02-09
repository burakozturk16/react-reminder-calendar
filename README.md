# React Reminder Calendar
An events calendar component built for React and made for modern browsers.


[![npm (scoped)](https://img.shields.io/npm/v/react-reminder-calendar.svg)](https://www.npmjs.com/package/react-reminder-calendar)

![screen shot](https://github.com/burakozturk16/react-reminder-calendar/blob/master/ss.jpg)

## Installation

```sh
npm install --save react-reminder-calendar
```

## Basic Sample

```js
import ReminderCalendar from "react-remindar-calendar"

const data = [
    {
        title: "TODAY, NOV 4",
        items: [
            {
                title: "Dinner with Richard",
                subTitle: "Richards House",
                icon: "fa fa-map-pin",
                startTime: "12:00",
                endTime: "13:00",
                isAllDay: false,
                allDayTitle: "All Day",
                separatorColor: "#26bdc6",
                style: {},
                infoViewComponent: null,
                rightViewComponent: null
            },
            {
                title: "Online meeting",
                subTitle: "Zoom",
                icon: "",
                startTime: "18:00",
                endTime: "19:30",
                isAllDay: false,
                allDayTitle: "All Day",
                separatorColor: "#a326c6",
                style: {},
                infoViewComponent: <div style={{fontSize: 12}}><small><b>Zoom Link</b>  <kbd>https://zoom.us/udyt4RE</kbd></small></div>,
                rightViewComponent: null
            }
        ],
        rightButton: {
            title: "+",
            show: true,
            props: {
                className: "",
                style: {backgroundColor: '#ccc', border: 'none', width: 22, height: 22}
            }
        }
    },
    {
        title: "TOMORROW, NOV 5",
        items: [
            {
                title: "Join the Summit",
                subTitle: "City Center",
                icon: "fa fa-map-pin",
                startTime: "10:00",
                endTime: "13:00",
                isAllDay: true,
                allDayTitle: "All Day",
                separatorColor: "#69c626",
                style: {},
                infoViewComponent: null,
                rightViewComponent: null
            },
            {
                title: "Enroll the online course",
                subTitle: "Udemy",
                icon: "",
                startTime: "18:00",
                endTime: "19:30",
                isAllDay: false,
                allDayTitle: "All Day",
                separatorColor: "#e5245a",
                style: {},
                infoViewComponent: null,
                rightViewComponent: null
            }
        ],
        rightButton: {
            title: "+",
            show: true,
            props: {
                className: "",
                style: {backgroundColor: '#ccc', border: 'none', width: 22, height: 22}
            }
        }
    }
]

class App extends React.Component {

    handleItemClick = (dateSection, item, index) => {
        
    }

    handleRightButtonClick = (dateSection, index) => {
        
    }
    
    render(){
        return(
            <ReminderCalendar
                shadow
                dateSections={data}
                onItemClick={this.handleItemClick}
                onDateSectionRightButtonClick={this.handleRightButtonClick}
            />
        )
    }
}

```

## Props of ReminderCalendar
| Name               | Type/Default     | Description
| ----------------   | ----------- | ------------------------------------------------------------------------------------------------------------
| shadow             | `false`     | 
| dateSections       | `array`     | A javascript object array, please see Props of DateSection Items 
| customDateSectionRightButton     | Component            | If you set this, default right button will be overrided.


## Props of DateSection Items
| Name               | Default     | Description
| ----------------   | ----------- | ------------------------------------------------------------------------------------------------------------
| title              | `string`    | 
| rightButton        | `object` or `Component`    | `title` `show` and `props`
| items              | `array`     | Please see Props of Item

## Props of Item
| Name               | Default     | Description
| ----------------   | ----------- | ------------------------------------------------------------------------------------------------------------
| title              | `string`    |
| subTitle           | `string`    |
| icon               | `string`    |
| startTime          | `string`    |
| endTime            | `string`    |
| isAllDay           | `boolean` `false` |
| allDayTitle        | `string`    |
| separatorColor     | `string`    |
| style              | `object`    |
| infoViewComponent  | `Component` |
| rightViewComponent | `Component` |


## Events
| Name                | Description |
| ------------------  | ----------  |
| onItemClick         | `function` with returns `dateSection` `item` and `index`
| onDateSectionRightButtonClick | `function` with returns `dateSection` and `index`

# Styling
* View `src/index.css` for styling examples.


## Contributing
Feel free to make a PR :) They are always welcome
