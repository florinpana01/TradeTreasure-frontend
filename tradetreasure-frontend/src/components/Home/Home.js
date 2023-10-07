// src/Home/Home.js
import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="search-bar">
        {/* Your search bar content here */}
        <input type="text" placeholder="Search for items" />
        <button>Search</button>
      </div>
      <div className="paragraphs">
        <div className="paragraph">
          <h2>Paragraph 1</h2>
          <p>This is the first paragraph content.</p>
        </div>
        <div className="paragraph">
          <h2>Paragraph 2</h2>
          <p>This is the second paragraph content.</p>
        </div>
        <div className="paragraph">
          <h2>Paragraph 3</h2>
          <p>This is the third paragraph content.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
