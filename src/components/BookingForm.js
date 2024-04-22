import React, { useState } from 'react'

export default function BookingForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occassion, setOccassion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date</label>
                        <input type='date' id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id='book-time' value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availableTime.availableTime.map(availableTime => {return <option key={availableTime}>{availableTime}</option>})
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor='book-guests'>Number of Guests: </label>
                        <input id='book-guests' min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
                    </div>
                    <div>
                    <label htmlFor='book-occassion'>Occassion: </label>
                    <select id='book-occassion' key={occassion} value={occassion} onChange={e => setOccassion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Office Party</option>
                    </select>
                    </div>
                    <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={"Make your Reservation"}  />
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}
