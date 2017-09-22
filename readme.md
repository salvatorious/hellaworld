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
```function homestead() {  
    ( cd ~/Homestead && vagrant $* )  
}```  
- Reprovision if necessary: `vagrant reload --provision` 
- If you get a 403 forbidden error when attempting to visit http://homestead.app: `sudo chown -R _www ~/Code/Laravel ; sudo chmod -R g+w ~/Code/Laravel`  
