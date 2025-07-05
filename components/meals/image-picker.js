'use client';
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
    const ref = useRef(null);
    const [image, setImage] = useState(null);
    const handleClick = () => {
        ref.current.click();
    }
    const handleChange = (e) => {
        const file = e.target.files[0];
        if(!file) {
            setImage(null);
            return;
        }

        if (file) {
            const fileReader = new FileReader();    
            fileReader.onload = () => {
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(file);
        }
    }


  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div>
        <div className={classes.preview}>
            {!image && <p>No image picked yet.</p>}
          {image && <Image src={image} alt="The image selected by the user." fill />}
        </div>
        </div>
        <input
        className={classes.input}
          type="file"
          id={name}
          name={name}
          required
          accept="image/png, image/jpeg"
          ref={ref}
          onChange={handleChange}
        />
        <button className={classes.button} type="button" onClick={handleClick}>Pick an Image</button>
      
      </div>
      
    </div>
  );
}
