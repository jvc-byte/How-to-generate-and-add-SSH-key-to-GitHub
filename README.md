# How-to-generate-and-add-SSH-key-to-GitHub

## The below are verified steps to add SSH key to your GItHub account (Linux CLI):

### 1. Check for Existing SSH Keys:
```bash
ls -al ~/.ssh
```
There should be files named `id_rsa` (private key) and `id_rsa.pub` (public key) or similarly named key pairs.
If there is no SSH key available you will receive a message like: `ls: cannot access '/c/Users/dell/.ssh': No such file or directory`
### 2. Generate a New SSH Key (if there is no SSH available else skip No. 2)
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Follow the prompts properly to save the key, and you can press Enter to accept the default file location. When prompted for a passphrase, you can choose to set one or leave it empty by pressing Enter.
### 3. Type the below command to add the SSH Key to the SSH Agent
```bash
eval "$(ssh-agent -s)"
```
```bash
ssh-add ~/.ssh/id_rsa
```
### 4. Add Your SSH Key to Your GitHub Account
Copy your SSH key to your clipboard:
```bash
cat ~/.ssh/id_rsa.pub
```
Go to [GitHub SSH settings](https://github.com/settings/keys), click "New SSH key," paste your key, and save it.
### 5. Test your SSH connection to GitHub:
```bash
ssh -T git@github.com
```
You should see a success message like:
```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```
### 6. Update the Remote URL.
Ensure your repository's remote URL uses the correct SSH format. Run:
```bash
git remote -v
```
If it shows a URL starting with `https://`, update it to the SSH format:
```bash
git remote set-url origin git@github.com:jekhokie/raspberry-noaa-v2.git
```
### 7. Try cloning the repository again:
```bash
git clone git@github.com:jekhokie/raspberry-noaa-v2.git
```
This will resolve the `Permission denied (publickey)` issue and successfully clone your repository via SSH.
