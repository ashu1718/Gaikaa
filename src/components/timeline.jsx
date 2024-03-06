import styles from "./timeline.module.css";
const Timeline = () => {
  return (
    <div className={styles.headCount}>
      <div className={styles.card1}>
        <div class="card" style={{ width: "25rem" }}>
          <div class="card-header">
            (Day 0) <br />
            <strong>April 24</strong>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Optional training add-ons <br /> 9:00 a.m.–4:00 p.m.
            </li>
            <li class="list-group-item">
              Welcome reception in expo hall <br /> 4:00 p.m.–6:00 p.m.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.card2}>
        <div class="card" style={{ width: "25rem" }}>
          <div class="card-header">
            (Day 1) <br /> <strong>April 24</strong>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Expo hall
              <br /> 7:30 a.m.–6:30 p.m.
            </li>
            <li class="list-group-item">
              Opening keynote <br />
              9:30 a.m.–10:30 a.m.
            </li>
            <li class="list-group-item">
              Enterprise payments keynote <br /> 10:45 a.m.–11:15 a.m.
            </li>
            <li class="list-group-item">
              Lunch and networking <br />
              11:00 a.m.–12:30 p.m.
            </li>
            <li class="list-group-item">
              Breakout talks <br /> 12:30 p.m.–2:30 p.m.
            </li>
            <li class="list-group-item">
              A conversation with NVIDIA’s Jensen Huang <br />
              3:00 p.m.–4:00 p.m.
            </li>
            <li class="list-group-item">
              Sessions celebration <br /> 4:00 p.m.–6:30 p.m
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.card3}>
        <div class="card" style={{ width: "25rem" }}>
          <div class="card-header">
            (Day 2) <br /> <strong>April 24</strong>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Expo hall
              <br /> 7:30 a.m.–6:30 p.m.
            </li>
            <li class="list-group-item">
              Opening keynote <br />
              9:30 a.m.–10:30 a.m.
            </li>
            <li class="list-group-item">
              Enterprise payments keynote <br /> 10:45 a.m.–11:15 a.m.
            </li>
            <li class="list-group-item">
              Lunch and networking <br />
              11:00 a.m.–12:30 p.m.
            </li>
            <li class="list-group-item">
              Breakout talks <br /> 12:30 p.m.–2:30 p.m.
            </li>
            <li class="list-group-item">
              A conversation with NVIDIA’s Jensen Huang <br />
              3:00 p.m.–4:00 p.m.
            </li>
            <li class="list-group-item">
              Sessions celebration <br /> 4:00 p.m.–6:30 p.m
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
