import React, { useState } from 'react';

const BookList = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [error, setError] = useState(false);

  const handleCheckboxChange = (book) => {
    const isChecked = selectedBooks.includes(book);
    if (isChecked) {
      setSelectedBooks(selectedBooks.filter((selectedBook) => selectedBook !== book));
    } else {
      setSelectedBooks([...selectedBooks, book]);
      setError(false); // Reset error when a book is selected
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBooks.length === 0) {
      setError(true); // Set error if no book is selected
    } else {
      // Proceed to next step
      setError(false); // Reset error if at least one book is selected
      // Your code to progress to the next step
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ backgroundColor: '#F2DEDF', color: '#B56A69', padding: '15px', marginLeft: '13px', borderRadius: '8px',  marginTop: '10px' }}>Please choose at least one book to continue</div>}
        <input type="checkbox" id="zeroToOne" name="zeroToOne" onChange={() => handleCheckboxChange('Zero to One -- Peter Thiel')} />
        <label htmlFor="zeroToOne">Zero to One -- Peter Thiel</label><br />
        <input type="checkbox" id="monkWhoSoldHisFearrary" name="monkWhoSoldHisFearrary" onChange={() => handleCheckboxChange('Monk who sold his Fearrary -- Robin Sharma')} />
        <label htmlFor="monkWhoSoldHisFearrary">Monk who sold his Fearrary -- Robin Sharma</label><br />
        <input type="checkbox" id="wingsOfFire" name="wingsOfFire" onChange={() => handleCheckboxChange('Wings of Fire -- A.P.J. Abdul Kalam')} />
        <label htmlFor="wingsOfFire">Wings of Fire -- A.P.J. Abdul Kalam</label><br />
        <button style={{ backgroundColor: 'green', color: 'white', padding: '8px 16px', marginLeft: '10px', marginTop: '10px' }} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookList;
