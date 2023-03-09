import React, { useEffect, useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  BASE_URL_GET,
  BASE_URL_POST,
  X_RapidAPI_Host,
  X_RapidAPI_Key,
} from "../../api/API";

import "./TranslateInput.css";
const TranslateInput = () => {
  const [translateValue, setTranslateValue] = useState("");
  // tarjima qilinadigan so'zning inputdan valuesini olish
  const [translatedValue, setTranslatedValue] = useState([]);

  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [languagesInputFrom, setLanguagesInputFrom] = useState([]);
  const [languagesInputTo, setLanguagesInputTo] = useState([]);

  const handleChange = (event) => {
    setTranslateValue(event.target.value);
  };

  const handleChangeLanguageFrom = (event) => {
    setValueFrom(event.target.value);
    // console.log(event.taget.value);
  };

  const handleChangeLanguageTo = (event) => {
    setValueTo(event.target.value);
  };
  const submitWord = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      translateWords()
    }
  };
  // console.log(translateValue);
  function translateWords() {
    console.log(translateValue);
    console.log(valueFrom);
    console.log(valueTo);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "15b902f954msh248a65d1e1efe53p18dc9fjsne3b13dfc1e8a",
        "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
      },
      body: JSON.stringify({
        from: valueFrom,
        to: valueTo,
        e: "",
        q: [translateValue],
      }),
    };

    fetch(BASE_URL_POST, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTranslatedValue(response[0]);
      })
      // .catch((err) => console.error(err));

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     "X-RapidAPI-Key": X_RapidAPI_Key,
    //     "X-RapidAPI-Host": X_RapidAPI_Host,
    //   },
    //   body:JSON.stringify( {
    //     fromLang: `${valueFrom}`,
    //     text: `${translateValue}`,
    //     to: `${valueTo}`,
    //   }),
    // };

    //   fetch(BASE_URL_POST, options)
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log(response);
    //       setTranslatedValue(response);
    //     })
    //     .catch((err) => console.error(err));
    // }
  }

  // get all languages
  useEffect(() => {
    translateWords();
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": X_RapidAPI_Key,
        "X-RapidAPI-Host": X_RapidAPI_Host,
      },
    };

    fetch(BASE_URL_GET, options)
      .then((response) => response.json())
      .then((response) => {
        setLanguagesInputFrom(Object.entries(response));
        setLanguagesInputTo(Object.entries(response));
        // let arr=[]
        // for(let key in response){
        //   arr.push({key, value:response[key]})
        // }

        // setLanguages(arr)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="wrapper-all">
          {/* {console.log(valueFrom)} */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Select language
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={valueFrom}
              label="Select language"
              onChange={handleChangeLanguageFrom}
            >
              {languagesInputFrom.map(([key, value]) => {
                return (
                  <MenuItem key={key} value={key}>
                    {value}
                    {console.log()}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {/* {console.log(translateValue)} */}
          <textarea
            onKeyUp={submitWord}
            onChange={handleChange}
            placeholder="Type-words"
            name=""
            id=""
            cols="50"
            rows="10"
            value={translateValue}
            maxLength={5000}
          ></textarea>
        </div>
        <div className="wrapper-all">
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 150, marginLeft: 2 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Select language
            </InputLabel>
            <Select
              // defaultValue={languagesInputTo[0]?.[0]}

              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={valueTo}
              label="Select language"
              onChange={handleChangeLanguageTo}
            >
              {languagesInputTo.map(([key, value]) => {
                // console.log([key,value]);
                return (
                  <MenuItem key={key} value={key}>
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          < div dangerouslySetInnerHTML={{__html:translatedValue}} className="answer-box"/>
        </div>
      </div>

      <Stack spacing={2} direction="row">
        <Button onClick={translateWords} variant="contained">
          Translate
        </Button>
      </Stack>
    </>
  );
};

export default TranslateInput;
