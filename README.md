- [ ] edit profile : update username, profile picture, extra info , delete account.
- [ ] Like / unlike post
- [x] user profile has only their posts
- [ ] Ability to click on a profile and view the user and their posts
  - [ ] if not friends : see only their name + send invitation
- [x] Comment on post
- [x] Delete a comment
- [x] set default profile picture for new user
- [x] Ability to click on profile if the post belongs to the connected user.

- [ ] Load localstorage in these actions: 
  - [ ] Add friend
  - [ ] Accept invitation
  - [ ]
- [x] LIVE CHAT
- [x] create room schema ( )
- [x] user => Array rooms
  - [x] each room object has : user1, user2, array of messages (message schema as it is now)
  - [X] once user is friends with a user, a room gets created and stored containning both users with no messages.
  - [x] display message component: gets room by user1 (connected) + user2 (currentFriend) + loop over message array
  - [x] once user send message, socket.io('new-message') => add message to messages array of room ref.
  - [x] ngOnInit() recalls the room to refresh the messages.



<div class="acc-setting">
<h3>Account Setting</h3>
<form>
<div class="cp-field">
 <h5>Old Password</h5>
<div class="cpp-fiel">
<input type="text" name="old-password" placeholder="Old Password">
<i class="fa fa-lock"></i>
</div>
</div>
<div class="cp-field">
<h5>New Password</h5>
<div class="cpp-fiel">
<input type="text" name="new-password" placeholder="New Password">
<i class="fa fa-lock"></i>
</div>
</div>
<div class="cp-field">
<h5>Repeat Password</h5>
<div class="cpp-fiel">
<input type="text" name="repeat-password" placeholder="Repeat Password">
<i class="fa fa-lock"></i>
</div>
</div>
<div class="cp-field">
<h5><a href="#" title="">Forgot Password?</a></h5>
</div>
<div class="save-stngs pd2">
<ul>
<li><button type="submit">Save Setting</button></li>
<li><button type="submit">Restore Setting</button></li>
</ul>
</div>
</form>
</div>