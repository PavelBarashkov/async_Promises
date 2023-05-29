/* eslint-disable linebreak-style */
export default class GameSaving {
  constructor(data) {
    this.id = Number(data.id);
    this.data = data.created;
    this.userInfo = {
      id: Number(data.userInfo.id),
      name: String(data.userInfo.name),
      level: Number(data.userInfo.level),
      points: Number(data.userInfo.points),
    };
  }
}
