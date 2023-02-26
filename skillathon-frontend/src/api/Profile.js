export class ProfileApi {
  static getProfileDetails() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({
          name: 'Varun Sharma',
          id: 1,
          skills: ['Java', 'JavaScript', 'React'],
          requiredSkills: ['Artificial Intelligence'],
        });
      }, 2000);
    });
  }
}
