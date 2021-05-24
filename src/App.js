import "./css/main.css";

function App() {
  return <Calendar date={now} />;
}

export default App;

const now = new Date();


function Calendar(props) {
  const { date } = props;
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  console.log(date.getDate());

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{days[date.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">
            {date.toLocaleString("ru", { month: "long" })}
          </div>
          <div className="ui-datepicker-material-year">
            {date.getFullYear()}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {date.toLocaleString("ru", { month: "long" })}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ui-datepicker-other-month">26</td>
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td className="ui-datepicker-other-month">29</td>
            <td className="ui-datepicker-other-month">30</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td  className={date.getDate() ? "ui-datepicker-today": null}>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
          </tr>
          <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
          <tr>
            <td>31</td>
            <td className="ui-datepicker-other-month">1</td>
            <td className="ui-datepicker-other-month">2</td>
            <td className="ui-datepicker-other-month">3</td>
            <td className="ui-datepicker-other-month">4</td>
            <td className="ui-datepicker-other-month">5</td>
            <td className="ui-datepicker-other-month">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
