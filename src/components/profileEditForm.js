import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import S from 'shorti'

class ProfileEditForm extends React.Component {
  render() {
    return (
      <Card style={S('w-50p center-block')}>
        <CardTitle title="Profile" titleStyle={S('text-center')} style={S('bg-eee')}/>
        <CardText>
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
            <div className="col-10">
              <input className="form-control"
                type="text" value="Artisanal kale" id="example-text-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-2 col-form-label">Search</label>
            <div className="col-10">
              <input className="form-control"
                type="search" value="How do I shoot web" id="example-search-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-email-input" className="col-2 col-form-label">Email</label>
            <div className="col-10">
              <input className="form-control"
                type="email" value="bootstrap@example.com" id="example-email-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-url-input" className="col-2 col-form-label">URL</label>
            <div className="col-10">
              <input className="form-control"
                type="url" value="https://getbootstrap.com" id="example-url-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-tel-input" className="col-2 col-form-label">Telephone</label>
            <div className="col-10">
              <input className="form-control"
                type="tel" value="1-(555)-555-5555" id="example-tel-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-password-input" className="col-2 col-form-label">
              Password
            </label>
            <div className="col-10">
              <input className="form-control"
                type="password" value="hunter2" id="example-password-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-number-input" className="col-2 col-form-label">Number</label>
            <div className="col-10">
              <input className="form-control" type="number" value="42" id="example-number-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-datetime-local-input" className="col-2 col-form-label">
              Date and time
            </label>
            <div className="col-10">
              <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00"
                id="example-datetime-local-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-date-input" className="col-2 col-form-label">Date</label>
            <div className="col-10">
              <input className="form-control"
                type="date" value="2011-08-19" id="example-date-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-month-input" className="col-2 col-form-label">Month</label>
            <div className="col-10">
              <input className="form-control"
                type="month" value="2011-08" id="example-month-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-week-input" className="col-2 col-form-label">Week</label>
            <div className="col-10">
              <input className="form-control" type="week" value="2011-W33" id="example-week-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-time-input" className="col-2 col-form-label">Time</label>
            <div className="col-10">
              <input className="form-control" type="time" value="13:45:00" id="example-time-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-color-input" className="col-2 col-form-label">Color</label>
            <div className="col-10">
              <input className="form-control"
                type="color" value="#563d7c" id="example-color-input"
              />
            </div>
          </div>
        </CardText>
      </Card>
    )
  }
}

export default ProfileEditForm
