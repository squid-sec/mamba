# reverse-shell VSCode Extension

reverse-shell VSCode extension attempts to create a reverse shell on startup of VSCode.

Much of this code is taken directly from or inspired by securezeron/VsCodeExtLure.

### What is a reverse shell

A reverse shell is a way in which an actor establishes a remote connection from a target machine to their machine.

### Local Execution

1. Run `brew instal nmap` in the terminal (Mac)
2. Run `ncat -lvnp {port}` in the terminal
3. You should then see something that looks like:
```
Ncat: Listening on [::]:80
Ncat: Listening on 0.0.0.0:80
```
4. Activate the reverse-shell extension (instructions on how to do this exist in the root README)
5. You should then see something that looks like `Ncat: Connection from {local IP address}:{port}.`
6. You should now be able to execute commands in the terminal as if you were the user on the machine who activated the execution --> reverse shell!

### EC2 Based Execution

1. Launch an AWS EC2 instance (ensure that a Public IP address is assigned)
2. Create a security group that allows ingress to the port you want to listen on
3. Add the security group to the EC2 instance
4. Connect to the EC2 instance
5. Run `sudo yum install nmap -y` in the terminal
6. Run `sudo ncat -lvnp {PORT}` in the terminal (sudo may not be required depending on which port you chose)
7. You should then see something that looks like:
```
Ncat: Listening on [::]:80
Ncat: Listening on 0.0.0.0:80
```
8. On your local machine, activate the reverse-shell extension (instructions on how to do this exist in the root README)
9. You should then see something that looks like `Ncat: Connection from {local IP address}:{port}.`
10. You should now be able to execute commands in the EC instance as if you were the user on the machine who activated the execution... reverse shell!

### Resources
https://github.com/securezeron/VsCodeExtLure
https://www.wiz.io/academy/reverse-shell-attacks
