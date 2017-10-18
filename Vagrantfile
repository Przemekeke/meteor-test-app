# -*- mode: ruby -*-
# vi: set ft=ruby :

# MS/ IMPORTANT NOTES:
# - meteor apps won't work in /vagrant directory
# - initial "downloading meteor-tool" might take a long time and it will look like it's stuck
#   but if the CPU and RAM usage of the virtual machine is high, it's doing ok
 


# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/xenial64"
 
  config.vm.hostname = "meteor-dev"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  config.vm.network "forwarded_port", guest: 22, host: 2220, host_ip: "127.0.0.1"
  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network", ip: "192.168.1.220", bridge: "eth1"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    # vb.gui = true
  
    # Customize the amount of memory on the VM:
    # MS: NOTE: 1024 is not enough for meteor update
    vb.memory = "2048"
    vb.cpus = "2"
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
    HOMEDIR=/home/ubuntu

    echo "updating apt and installing required packages"
    apt-get update
    apt-get install -y mongodb mongodb-server mongodb-clients && echo "OK" || echo "FAILED"
    
    echo "installing meteor"
    curl https://install.meteor.com/ | sh
    
    echo "installing newest nodejs-6 and npm"
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && echo "OK" || echo "FAILED"
    sudo apt-get install -y nodejs && echo "OK" || echo "FAILED"
    
    echo "installing mup"
    sudo npm install -g mup && echo "OK" || echo "FAILED"
    
    echo "copying app to ~/"
    cd $HOMEDIR
    mkdir -p meteor-test-app && cp -r /vagrant/. meteor-test-app && echo "OK" || echo "FAILED"
    echo "fixing permissions"
    sudo chown -Rh ubuntu meteor-test-app/ && echo "OK" || echo "FAILED"
        
    echo "running meteor update"
    echo "WARNING: this may take a long time to finish!"
    cd meteor-test-app && sudo -u ubuntu -i /bin/bash -c "cd $(pwd) && meteor update" && echo "OK" || echo "FAILED"

    echo "installing required npm modules"
    sudo -u ubuntu -i /bin/bash -c "cd $(pwd) && meteor npm install --save babel-runtime simpl-schema bcrypt" && echo "OK" || echo "FAILED"
    
    echo "if it failed, run following command manually after git clone in vagrant ssh: 'cp -r /vagrant/. ~/meteor-test-app/ && cd ~/meteor-test-app && meteor update && meteor npm install --save babel-runtime simpl-schema bcrypt'"
    
    echo "If no errors occured, just run 'vagrant ssh', then cd meteor-test-app and run 'meteor'"
    echo "To deploy this app to a server, run 'vagrant up' from 'production/' dir, then run 'deploy.sh' from ~/meteor-test-app/production dir inside this VM"
  SHELL
end
