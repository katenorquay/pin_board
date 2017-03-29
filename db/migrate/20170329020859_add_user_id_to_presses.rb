class AddUserIdToPresses < ActiveRecord::Migration[5.0]
  def change
    add_column :presses, :user_id, :integer
    add_index :presses, :user_id
  end
end
