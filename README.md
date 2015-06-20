# a.ghuser.io

Source of http://a.ghuser.io

## Serve locally

```bash
$ sudo npm install -g http-server
$ http-server
```

## Deploy/Update the AWS Route 53 subdomain

```bash
$ sudo pip install awscli
$ aws configure
AWS Access Key ID [None]: ********
AWS Secret Access Key [None]: ********
Default region name [None]: us-east-1
Default output format [None]:
$ ./aws/dns_update.sh
```
