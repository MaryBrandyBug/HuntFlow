const candidateCard = document.querySelector('.candidate-card');
console.log(candidateCard);

document.addEventListener('click', async (event) => {
  console.log('CLICK');
  console.log(event.target.dataset);
  console.log(event.target.closest('div').dataset);
  if (event.target.dataset.candidateId || event.target.closest('div').dataset.candidateId) {
    let currentDiv;
    if (event.target.dataset.candidateId) {
      currentDiv = event.target;
    } else if (event.target.closest('div').dataset.candidateId) {
      currentDiv = event.target.closest('div');
    }

    const { candidateId, stageName, stageStatus } = currentDiv.dataset;
    console.log({ candidateId, stageName, stageStatus });

    const response = await fetch(`/candidate/data/${candidateId}`);
    // console.log(response);
    if (response.status === 200) {
      const currCandidate = await response.json();
      console.log(currCandidate);

      candidateCard.innerHTML = `
    <div class="candidate-info">
        
        <div class="info">

          <div>
            <div class="bio">
              <div><p class="name">Ф. <span id="surname">${currCandidate.surname}</span></p></div>
              <div><p class="name">И. <span id="name">${currCandidate.name}</span></p></div>
              <div><p class="name">О. <span id="middlename">${currCandidate.middlename}</span></p></div>
              <div><p>Телефон <span id="phone">${currCandidate.phone}</span></p></div>
              <div><p>Эл. почта <span id="email">${currCandidate.email}</span></p></div>
              <div><p>Опыт работы <span id="experience">${currCandidate.experience}</span></p></div>
              <div><p>Проживает <span id="location">${currCandidate.location}</span></p></div> 
              <button type="button" name="bio">Изменить данные</button>
            </div>
          </div>

          <div class="stage-status">

          <div class="stage-status-block">
            <div>
              <h3>Текущий этап:</h3>
              ${stageName === 'stage1' ? '<p>Отправлено письмо-приглашение</p>' : ''}
              ${stageName === 'stage2' ? '<p>Назначен звонок-скрининг</p>' : ''}
              ${stageName === 'stage3' ? '<p>Назначено видеоинтервью</p>' : ''}
              ${stageName === 'stage4' ? '<p>Резюме передано заказчику</p>' : ''}
              ${stageName === 'stage5' ? '<p>Назначено интервью с заказчиком</p>' : ''}
              ${stageName === 'stage6' ? '<p>Выставлен оффер</p>' : ''}
              ${stageName === 'stage7' ? '<p>Оффер принят. Выход на работу</p>' : ''}
              ${stageName === 'stage8' ? '<p>Отказ</p>' : ''}              
            </div>

            ${stageName === 'stage2' || stageName === 'stage3' || stageName === 'stage5' ? `
              <div>
                <h3>Дата назначенного события:</h3>
                <div class="stage-date">
                  <p>11.11.2022, 17:00</p>
                  <button>Изменить</button>
                </div>
              </div>
            ` : ''}

            ${stageName !== 'stage8' ? `
              <div>
                <h3>Статус этапа:</h3>
                <div class="stage-status-button">
                  ${stageStatus === 'true' ? '<p class="green">пройден</p>' : '<p class="red">не пройден</p>'}
                  <button>Изменить</button>
                </div>
              </div>
            ` : ''}
          </div>
          
          <button type="button" name="bio">Перевести кандидата на другой этап</button>

        </div>

        </div>

        <object class="resume">
          <embed src ="/pdf/001.pdf" type ="application/pdf" />
        </object>

      </div>
    `;
    } else {
      console.log('!!! ОШИБКА НА СЕРВЕРЕ !!!');
    }
  }
});
