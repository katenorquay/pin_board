class CreatePresses < ActiveRecord::Migration[5.0]
  def change
    create_table :presses do |t|
      t.string :link
      t.timestamps
    end
  end
end
