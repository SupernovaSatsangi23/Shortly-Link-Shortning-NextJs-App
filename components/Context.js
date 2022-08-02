import { css } from '@emotion/css'

const Context = () => {
	return (
		<section className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              text-align: center;
              margin-top: 20rem;

              @media (max-width: 375px) {
                  padding: 2em;
                  margin-top: 35em;
                }
              // outline: 2px solid black;`}>
              <h1 className={css`
                color: #35323e;
                letter-spacing: -1px;
                font-size: 3em;
                font-family: 'Poppins', sans-serif;
                font-weight: bold;

                @media (max-width: 375px) {
                  font-size: 1.5em;
                }`}>Advanced Statistics</h1>
              <p className={css`
                margin-top: -4%;
                color: #8e8f91;
                font-size: 1.3em;
                font-family: 'Poppins', sans-serif;

                @media (max-width: 375px) {
                  font-size: 0.9em;
                  br {
                    display: none;
                  }
                }`}>Track how your links are performing across the web with<br />our advanced statistics dashboard.</p>
            </section>
	);
};

export default Context;