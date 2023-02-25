export class ProfileApi {
  static getProfileDetails() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({
          name: 'Varun',
          id: 1,
          skills: ['java', 'js', 'react'],
        });
      }, 5000);
    });
  }
}
