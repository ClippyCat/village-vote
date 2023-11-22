cd C:\Users\Melody\Desktop\bs\programming\myrepo\village-vote
git push -u origin main
ssh arch@clippycat.ca "cd village-vote; git pull origin main --rebase; sudo cp config/village-vote.service /etc/systemd/system/; sudo systemctl daemon-reload; sudo systemctl restart village-vote; python /src/db/connection.py"