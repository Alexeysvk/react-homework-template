import style from "./style.module.scss"

export const ToDoinputForm = () => {
    return (
      <div className={style.cartInputForm}>
        <form> 
          <label className={style.label}>
            <span>Name</span>
            <input type="text"/>
          </label>
  
          <label>
            <span>Price</span>
            <input type="number"/>
          </label>
  
          <button type="submit">+ add</button>
        </form>
      </div>
    );
  };
  
  export default ToDoinputForm;