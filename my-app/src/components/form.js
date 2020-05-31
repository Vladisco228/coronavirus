import React from 'react';

 class Form extends React.Component {
     render() {
         return (
            <form>
                <input type="text" name="Country" placeholder="Страна"/>
                <button>Получить статистику</button>
            </form>
         );
      }
  }

 export default Form;