export class ProfileApi {
  static getProfileDetails() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({
          name: 'Avid Learner',
          id: 1,
          skills: ['Java', 'JavaScript', 'React'],
          requiredSkills: ['Artificial Intelligence'],
        });
      }, 1000);
    });
  }
}
