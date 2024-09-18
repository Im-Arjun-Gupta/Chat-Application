const { exec } = require("child_process");

const OLD_EMAIL = "arjun.gupta@ignatiuz.com"; // Replace with the old email
const NEW_NAME = "Arjun Gupta"; // Replace with the new author name
const NEW_EMAIL = "guptaarjun519@gmail.com"; // Replace with the new email

const changeAuthorCommand = `
git filter-branch --env-filter -f '
if [ "$GIT_COMMITTER_EMAIL" = "${OLD_EMAIL}" ]
then
    export GIT_COMMITTER_NAME="${NEW_NAME}";
    export GIT_COMMITTER_EMAIL="${NEW_EMAIL}";
fi
if [ "$GIT_AUTHOR_EMAIL" = "${OLD_EMAIL}" ]
then
    export GIT_AUTHOR_NAME="${NEW_NAME}";
    export GIT_AUTHOR_EMAIL="${NEW_EMAIL}";
fi
' --tag-name-filter cat -- --branches --tags
`;

exec(changeAuthorCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
