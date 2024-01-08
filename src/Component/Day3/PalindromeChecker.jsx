import React, { useState, useEffect } from "react";
import "./PalindromeChecker.css";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const PalindromeChecker = () => {
  const [word, setWord] = useState("");
  const [completeword, setcompleteword] = useState("");
  const [reverse, setReverse] = useState("");
  const [checkPalindrome, setCheckPalindrome] = useState();
  const [vowel, Setvowel] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setWord(e.target.value);
  };
  console.log(word);

  const handleFunctions = () => {
    handleReverse();
    handleVowelCount();
  };
  const handleReverse = () => {
    if (word === "") {
      alert("Write a Word ");
    } else {
      let splitString = word.split("");
      let reverseArray = splitString.reverse();
      let joinArray = reverseArray.join("");
      setReverse(joinArray);
      setcompleteword(word);
      setShowMessage(true);
    }
  };
  console.log(reverse);

  useEffect(() => {
    const compareWords = word.localeCompare(reverse);
    setCheckPalindrome(compareWords);
    console.log(compareWords);
  }, [reverse]);

  const handleVowelCount = () => {
    let splitword = word.toLowerCase().split(""); // Convert to lowercase for case-insensitive comparison
    const vowelArray = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    splitword.forEach((element) => {
      if (vowelArray.includes(element)) {
        vowelCount++;
      }
    });
    Setvowel(vowelCount);
    console.log(vowelCount);
  };

  const handleNavigate = () => {
    Navigate("/Day4");
  };
  const handleNavigateback = () => {
    Navigate("/Day2");
  };

  return (
    <div className="main_container palidrome_checker">
      <div className="palidrome_checker_container">
        <h2>Palindrome Checker & Vowels Counter</h2>
        <div className="palidrome_checker_input_button">
          <input
            placeholder="Write a word"
            type="text"
            value={word}
            onChange={handleChange}
          />
          <button onClick={handleFunctions}>
            <IoSearchOutline />
          </button>
        </div>

        {showMessage && (
          <div>
            {checkPalindrome === 0 ? (
              <p className="Palidrome">{`${completeword} is a Palindrome and have ${vowel} vowels`}</p>
            ) : (
              <p className="notPalidrome">{`${completeword} is not a Palindrome  and have ${vowel} vowels`}</p>
            )}
          </div>
        )}
      </div>
      <div className="nextbutton_container">
        <button className="NextButton" onClick={handleNavigateback}>
          Back
        </button>
        <button className="NextButton" onClick={handleNavigate}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PalindromeChecker;
