## Homestead setup (Sal's rough guide)  

- [Install VirtualBox](https://www.virtualbox.org/)  
- [Install Vagrant](https://www.vagrantup.com/)  

**The following commands are from the [Laravel Homestead instructions](https://laravel.com/docs/5.4/homestead#installation-and-setup)**  
- `vagrant box add laravel/homestead`  
- `cd ~`  
- `git clone https://github.com/laravel/homestead.git Homestead`
- `cd Homestead`  
- `git checkout v6.1.0`  
- (**current pwd:** ~/Homestead) `bash init.sh`  
- `vim Homestead.yaml`  
   ![Sal's homestead.yaml](http://nicetouch.co/wp-content/uploads/2017/09/Screenshot-2017-09-19-16.59.03.png)  
- `mkdir ~/Code/Laravel/public`  
- copy .env.example to a file called .env
- `php artisan key:generate`
- `echo "192.168.10.10  homestead.app" >> /etc/hosts`  
- Global homestead command in .bash_profile (`homestead up`, `homestead ssh`):  
```
function homestead() {  
    ( cd ~/Homestead && vagrant $* )  
}
```  
- then, you can just `homestead up` to start the VM, and `homestead ssh` once it's ready.
- Reprovision if necessary: `vagrant reload --provision` 
- If you get a 403 forbidden error when attempting to visit http://homestead.app: `sudo chown -R _www ~/Code/Laravel ; sudo chmod -R g+w ~/Code/Laravel`  

**Database Manager Options**

- [Install Sequel Pro](https://www.sequelpro.com/)
- [Install pypMyAdmin](https://www.phpmyadmin.net/)

**Sequel Pro Configuration**

- Name: Homestead
- Host: 127.0.0.1
- Username: homestead
- Password: secret
- Database: (Optional)
- Port: 33060

**phpMyAdmin Configuration**

- From ~/Code
`curl -sS https://raw.githubusercontent.com/grrnikos/pma/master/pma.sh | sh`

- Open up `homestead.yaml` file and add these lines

`folders:
    - map: /Users/{yourName}/Code/phpMyAdmin
      to: /home/vagrant/Code/phpMyAdmin
sites:
    - map: phpmyadmin.app
      to: /home/vagrant/Code/phpMyAdmin`

- Open the `/etc/hosts` on your main machine and add:
`127.0.0.1  phpmyadmin.app`

- Reprovision
`vagrant reload --provision` 

- Navigate to
`http://phpmyadmin.app:8000`